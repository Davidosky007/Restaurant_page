const contactPage = () => {
  const contact = document.createElement('div');
  contact.setAttribute('id', 'form-div');
  contact.classList.add('contact_page');
  contact.innerHTML = `
  <form action="" id="myForm" class="mx-auto">
   <h1>Contact Us</h1>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" class="form-control text-field" id="name" required/>
      </div>
      <div class="form-group">
        <label for="author">Email</label>
        <input type="email" class="form-control" id="author" required/>
      </div>
      <div class="form-group">
      <label for="exampleTextarea">Example textarea</label>
      <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
      <input type="submit" value="submit" class="btn btn-info btn-lg btn-block" />
    </form>
  `;
  return contact;
};

export { contactPage as default };