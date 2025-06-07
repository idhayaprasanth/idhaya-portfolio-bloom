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
                echo 'Build step: nothing to build for static portfolio, so just echo.'
            }
        }

        stage('Test') {
            steps {
                echo 'Test step: no tests now, so just echo.'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploy step: placeholder, you can add deploy commands later.'
            }
        }
    }
}
