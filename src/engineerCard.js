function engineerCard(engineer) {
  return `
    <div class="card employee-card">
      <div class="card-header">
        <h2 class="card-title   
        ">${engineer.name}</h2>
        <h3 class="card-title
        "><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group
            ">
                <li class="list-group
                -item">ID: ${engineer.id}</li>
                <li class="list-group
                -item">Email: <a href="mailto:${engineer.email}">${
    engineer.email
  }</a></li>
                <li class="list-group
                -item">GitHub: <a href="
                https://github.com/${
                  engineer.github
                }" target="_blank" rel="noopener noreferrer">${
    engineer.github
  }</a></li>
            </ul>
        </div>
    </div>
    `;
}
module.exports = engineerCard;
