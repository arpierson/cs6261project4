pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh '/usr/local/bin/npm install'
            }
        }
        stage('test') {
            steps {
                sh 'ng test'
            }
        }
        stage('e2e') {
            steps {
                echo "Not yet implemented"
            }
        }
        stage('deploy') {
            steps {
                echo "Not yet implemented"
            }
        }
    }
}