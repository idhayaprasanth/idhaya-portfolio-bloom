pipeline {
  agent any

  environment {
    GIT_REPO = 'https://github.com/idhayaprasanth/idhaya-portfolio-bloom.git'
    BRANCH = 'gh-pages'
  }

  stages {
    stage('Checkout') {
      steps {
        echo 'Cloning the repo...'
        checkout scm
      }
    }

    stage('Build') {
      steps {
        echo 'Running npm install and build...'
        bat 'npm install'
        bat 'npm run build'
      }
    }

   stage('Deploy to GitHub Pages') {
  steps {
    echo 'Deploying dist/ to gh-pages branch...'
    withCredentials([usernamePassword(credentialsId: 'github-token', usernameVariable: 'GIT_USER', passwordVariable: 'GIT_TOKEN')]) {
      bat '''
      git config --global user.name "%GIT_USER%"
      git config --global user.email "jenkins@ci.local"

      rd /s /q out
      git clone https://%GIT_USER%:%GIT_TOKEN%@github.com/idhayaprasanth/idhaya-portfolio-bloom.git --branch gh-pages out

      xcopy /E /Y dist\\* out\\

      cd out
      git add .
      git commit -m "Deployed from Jenkins"
      git push origin gh-pages
      '''
    }
  }
}

  }
}
