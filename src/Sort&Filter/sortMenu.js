const closeMenu = () => {
    sortMenu.classList.remove('sort-show');
    sortMenu.classList.add('sort-hide');
    setTimeout(() => {
      sortMenu.classList.add('hidden');
    }, 300);
  };
  