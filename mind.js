
function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.remove('active');
      
    });
    document.querySelectorAll('.tab-btn button').forEach(btn => {
      btn.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');
    document.querySelector(`.${tabName}-btn`).classList.add('active');
  }
