const janjiSaya = new Promise((menyelesaikan, menolak) => {
    if (false) {
      setTimeout(() => {
        menyelesaikan('Janji saya terselesaikan');
      }, 1000);
    } else {
      menolak('Janjinya belum bisa ditepati, masih ada masalah!');
    }
  });
  
  janjiSaya
    .then((nilai) => console.log(nilai))
    .catch((kesalahan) => console.log(kesalahan));
  