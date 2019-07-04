pipeline {
    agent any
    stages {
        stage('build') {
            sh 'npm install'
        }
        stage('test') {
            sh 'ng test'
        }
        stage('e2e') {
            echo "Not yet implemented"
        }
        stage('deploy') {
            echo "Not yet implemented"
        }
    }
}