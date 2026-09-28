pipeline {
    agent any

    triggers {
        // Poll SCM every 2 minutes for changes
        pollSCM('H/2 * * * *')
    }

    environment {
        // Remote Selenium connection URL
        SELENIUM_REMOTE_URL = 'http://selenium:4444/wd/hub'
    }

    tools { 
        nodejs 'node20' 
    }

    stages {
        stage('Install') { 
            steps { 
                sh 'npm install' 
            } 
        }

        stage('UI Test') { 
            steps { 
                sh 'npm test' 
            } 
        }
    }

    post {
        always {
            // Post step for JUnit reporting
            junit allowEmptyResults: true, testResults: '**/junit.xml'
        }
    }
}