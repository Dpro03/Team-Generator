function internCard(intern) {
  return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title   
            ">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h6>
            <ul class="list-group
            ">
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
