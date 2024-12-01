document.addEventListener('DOMContentLoaded', function() {  
  document.querySelectorAll('.work ul li').forEach(workItem => {  
    workItem.addEventListener('mouseover', () => {  
      const index = workItem.getAttribute('data-index');  
      const achievementItem = document.querySelector(`.achieve ul li[data-index="${index}"]`);  
  
      if (achievementItem) {  
        workItem.classList.add('highlight');  
        achievementItem.classList.add('highlight');  
      }  
    });  
  
    workItem.addEventListener('mouseout', () => {  
      const index = workItem.getAttribute('data-index');  
      const achievementItem = document.querySelector(`.achieve ul li[data-index="${index}"]`);  
  
      if (achievementItem) {  
        workItem.classList.remove('highlight');  
        achievementItem.classList.remove('highlight');  
      }  
    });  
  });  

  document.querySelectorAll('.achieve ul li').forEach(achievementItem => {
    achievementItem.addEventListener('mouseover', () => {
      const index = achievementItem.getAttribute('data-index');
      const workItem = document.querySelector(`.work ul li[data-index="${index}"]`);

      if (workItem) {
        achievementItem.classList.add('highlight');
        workItem.classList.add('highlight');
      }
    });

    achievementItem.addEventListener('mouseout', () => {
      const index = achievementItem.getAttribute('data-index');
      const workItem = document.querySelector(`.work ul li[data-index="${index}"]`);

      if (workItem) {
        achievementItem.classList.remove('highlight');
        workItem.classList.remove('highlight');
      }
    });
  });
});