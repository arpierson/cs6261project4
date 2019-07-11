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
                sh 'docker run -d --name testcontainer -v $(WORKSPACE):/calculator/data -p 127.0.0.1:4200:4200 testimage'
                sh './node_modules/protractor/bin/webdriver-manager update'
                sh 'ng e2e --devServerTarget='
            }
        }
        stage('deploy') {
            steps {
                echo "Not yet implemented"
            }
        }
    }
    post { 
        always { 
            sh 'docker rm testcontainer || true'
        }
    }
}