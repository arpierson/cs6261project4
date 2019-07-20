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
                
                // Added sleep command to give http-server time to full start in the Docker container before invoking e2e tests
                // Increase this time if you receive 'connection was reset' error from Firefox in Protractor tests to give your computer more time to fire up http-server
                sh 'sleep 120s'
                sh 'ng e2e --devServerTarget='
            }
        }
        stage('deploy') {
            steps {
                sh 'docker image rm deploymentimage --force || true'
                sh 'docker rm deploymentcontainer --force || true'
                sh 'docker build -t deploymentimage .'
                sh 'docker run -d --name deploymentcontainer -v "$WORKSPACE":/calculator -p 127.0.0.1:5000:4200 deploymentimage'
                sh './node_modules/protractor/bin/webdriver-manager update'
            }
        }
    }
    post { 
        always { 
            sh 'docker rm testcontainer --force || true'
        }
    }
}