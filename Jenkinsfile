pipeline {
	agent { dockerfile true }
	stages {
		stage('Test') {
			steps {
				sh 'node --version'
        sh 'curl localhost:8000'
			}
		}
	}
}
