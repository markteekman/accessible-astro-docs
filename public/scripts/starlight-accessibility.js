window.docs = {};




window.docs.addIdToMainContent = function() {
  const mainContent = document.getElementsByTagName('main')[0]
  mainContent.setAttribute('id', 'main-content');
}

window.addEventListener('DOMContentLoaded', window.docs.addIdToMainContent);