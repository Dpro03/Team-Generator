function internCard(intern) {
  return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group
                -item">ID: ${intern.id}</li>    
                <li class="list-group   
                -item">Email: <a href="mailto:${intern.email}">${
    intern.email
  }</a></li>
                <li class="list-group
                -item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
    `;
}

module.exports = internCard;
