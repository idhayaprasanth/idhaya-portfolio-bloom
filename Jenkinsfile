pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Cloning the repo...'
                checkout scm
            }
        }

        stage('Build') {
            steps {
                echo 'Running npm install and npm run build...'
                bat 'npm install'
                bat 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Test step: Add your test command here.'
                // Example: bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step: Add deploy command or script here.'
            }
        }
    }
}
