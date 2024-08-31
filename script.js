document.addEventListener('DOMContentLoaded', function () {
    const buttonsContainer = document.getElementById('buttons-container');

    const files = [
        'running-notes/01 - Introduction Notes.txt',
        'running-notes/02 - Linux Running Notes.txt',
        'running-notes/04 - Maven Running Notes.txt',
        'running-notes/05 - GitHub Running Notes.txt',
        'running-notes/06 - Tomcat Running Notes.txt',
        'running-notes/07 - Sonar Qube Notes.txt',
        'running-notes/08 - Nexus Running Notes.txt',
        'running-notes/09 - Jenkins Running Notes.txt',
        'running-notes/10 - AWS Running Notes.txt',
        'running-notes/11 - AWS RDS Notes.txt',
        'running-notes/12 - AWS S3 Notes.txt',
        'running-notes/13 - IAM Notes.txt',
        'running-notes/14 - EC2 Notes.txt',
        'running-notes/15 - Cloud Watch and SNS.txt',
        'running-notes/16 - AWS CLI Notes.txt',
        'running-notes/17 - AWS VPC.txt',
        'running-notes/18 - Terraform Notes.txt',
        'running-notes/19 - Elastic Beanstalk Notes.txt',
        'running-notes/20 - AWS Lambdas.txt',
        'running-notes/21 - Cloud Formation Notes.txt',
        'running-notes/22 - Ansible Notes.txt',
        'running-notes/23 - Terraform Notes.txt',
        'running-notes/24 - JIRA Notes.txt',
        'running-notes/25 - Docker Running Notes.txt',
        'running-notes/26.Notes.txt',
        'running-notes/27 - Interview Guide.txt',
        'running-notes/29 - Project Setup.txt',
        'running-notes/29.Notes.txt',
        'running-notes/29.Notes1.txt',
        'running-notes/29.Notes2.txt',
        'running-notes/29.Notes3.txt',
        'running-notes/30 - Microservices Project.txt',
        'running-notes/shell script webpage.txt',
        'running-notes/AWS CLI CMDS.txt'
    ];

    files.forEach(file => {
        const button = document.createElement('button');
        button.textContent = file.replace('running-notes/', '');
        button.addEventListener('click', () => {
            window.open(`view-file.html?file=${encodeURIComponent(file)}`, '_blank');
        });
        buttonsContainer.appendChild(button);
    });
});
