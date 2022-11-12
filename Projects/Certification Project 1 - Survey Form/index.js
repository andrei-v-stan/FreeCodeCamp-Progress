function handler(puppyForm) {

  const container = document.getElementById("formBox");
  container.innerHTML = "";


  const divFullName = document.createElement('div');
  divFullName.innerHTML = `${puppyForm["full-name"].value}`;
  container.appendChild(divFullName);


  const divEmail = document.createElement('div');
  divEmail.innerHTML = `${puppyForm.email.value}`;
  container.appendChild(divEmail);


  const divDog = document.createElement('div');
  divDog.innerHTML = `${puppyForm["dog-person"].value}`;
  const divDogPerson = document.createElement('div');

  if (divDog.innerHTML == "dogYes") {
    const dogRaiting = document.createElement('div');
    dogRaiting.innerHTML = `${puppyForm["dog-rating"].value}`;
    divDogPerson.innerHTML = "They like dogs and rate them as a " + dogRaiting.innerHTML + " out of 10";
  }
  else {
    divDogPerson.innerHTML = "They dislike dogs";
  }

  container.appendChild(divDogPerson);


  const divCat = document.createElement('div');
  divCat.innerHTML = `${puppyForm["cat-person"].value}`;
  const divCatPerson = document.createElement('div');

  if (divCat.innerHTML == "catYes") {
    const catRaiting = document.createElement('div');
    catRaiting.innerHTML = `${puppyForm["cat-rating"].value}`;
    divCatPerson.innerHTML = "They like cats and rate them as a " + catRaiting.innerHTML + " out of 10";
  }
  else {
    divCatPerson.innerHTML = "They dislike cats";
  }

  container.appendChild(divCatPerson);


  const divOtherAnimals = document.createElement('div');
  divOtherAnimals.innerHTML = `${puppyForm["other-animals"].value}`;
  const divOther = document.createElement('div');

  if (divOtherAnimals.innerHTML == "otherYes") {
    const otherWriting = document.createElement('div');
    otherWriting.innerHTML = `${puppyForm["other-animals-box"].value}`;
    divOther.innerHTML = "They like other animals as well and wrote : " + otherWriting.innerHTML;
  }
  else {
    divOther.innerHTML = "They dislike other animals";
  }

  container.appendChild(divOther);


  const divAge = document.createElement('div');
  divAge.innerHTML = `${puppyForm.age.value}`;
  container.appendChild(divAge);


  const divGender = document.createElement('div');
  divGender.innerHTML = `${puppyForm.gender.value}`;
  container.appendChild(divGender);


  const divCountry = document.createElement('div');
  divCountry.innerHTML = `${puppyForm.country.value}`;
  container.appendChild(divCountry);

}
