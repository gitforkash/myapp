pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building.. Path ='
                sh 'pwd'
                sh 'npm install'

            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                // sh 'node server.js'
            }
        }
    }
}