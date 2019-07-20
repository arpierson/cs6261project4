pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('test') {
            steps {
                sh 'ng test'
            }
        }
        stage('e2e tests') {
            steps {
                sh 'docker build -t testimage .'
                sh 'docker run -d --name testcontainer -v "$WORKSPACE":/calculator -p 127.0.0.1:4200:4200 testimage'
                sh './node_modules/protractor/bin/webdriver-manager update'

                // Wait until http-server is fully running and webapp returns http status code 200 before running next step
                waitUntil {
                  script {
                      try {         
                        sh "curl -s --head  --request GET  127.0.0.1:4200 | grep '200'"
                        return true
                    } catch (Exception e) {
                        return false
                    }
                  }
              }
                sh 'ng e2e --devServerTarget='
            }
        }
        stage('deploy') {
            steps {
                sh 'docker stop deploymentcontainer'
                sh 'docker image rm deploymentimage --force || true'
                sh 'docker rm deploymentcontainer --force || true'
                sh 'docker build -t deploymentimage .'
                sh 'docker run -d --name deploymentcontainer -v "$WORKSPACE":/calculator -p 127.0.0.1:5000:4200 deploymentimage'
                sh './node_modules/protractor/bin/webdriver-manager update'

                // Wait until http-server is fully running and webapp returns http status code 200 before marking stage as complete/successful
                waitUntil {
                  script {
                      try {         
                        sh "curl -s --head  --request GET  127.0.0.1:5000 | grep '200'"
                        return true
                    } catch (Exception e) {
                        return false
                  }
                  }
              }
            }
        }
    }
    post { 
        always { 
            sh 'docker rm testcontainer --force || true'
        }
    }
}