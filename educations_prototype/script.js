document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const tabButtons = document.querySelectorAll('.tab-button');
    const semesterContents = document.querySelectorAll('.semester-content');
    
    // Navigation principale
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Retirer la classe active de tous les liens et sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Ajouter la classe active au lien cliqué
            this.classList.add('active');
            
            // Afficher la section correspondante
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Scroll vers le haut de la page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Navigation des onglets de semestre
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons et contenus
            tabButtons.forEach(btn => btn.classList.remove('active'));
            semesterContents.forEach(content => content.classList.remove('active'));
            
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Afficher le contenu correspondant
            const semesterId = this.getAttribute('data-semester');
            document.getElementById(semesterId).classList.add('active');
        });
    });
    
    // Simulation de sélection d'option dans le quiz
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            options.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Navigation du quiz
    const quizButtons = document.querySelectorAll('.quiz-nav .button');
    quizButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert('Fonctionnalité de navigation du quiz à implémenter');
        });
    });
    
    // Boutons des jeux et vidéos
    const actionButtons = document.querySelectorAll('.game-card .button, .video-card .button');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Cette fonctionnalité sera bientôt disponible!');
        });
    });
    
    // Chapitres des matières
    const chapterLinks = document.querySelectorAll('.chapters-list a');
    chapterLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Contenu du chapitre à implémenter');
        });
    });
});