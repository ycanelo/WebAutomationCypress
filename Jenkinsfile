pipeline{
//agente donde se ejecuta el pipeline
agent any
//herramientas que se van a utilizar
tools {
    gradle "Gradle"
}

stages{
    stage("Tareas de Limpieza"){
        steps{
            //repositorio del código a ejecutar
            git 'https://github.com/ycanelo/WebAutomationCypress.git'
            sh 'gradle clean'
        }
    }
    stage("Imprimo"){
        steps{
            echo "Stage imprimir"
        }
    }
}
