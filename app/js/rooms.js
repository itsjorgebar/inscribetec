function getRooms() {
  // Query DB.
  firebase.database().ref('/rooms').once('value').then(
    function (snapshot) {
      // Iterate rooms.
      let rooms = snapshot.val();
      Object.keys(rooms).forEach((key) => {
        var ul = document.getElementById("ul");
        var li = document.createElement("li");
        var btn = document.createElement("BUTTON");
        // Display room.
        btn.innerHTML = key;
        btn.onclick = () => {window.location.href = "../schedule.html?room=" + key;};
        li.appendChild(btn);
        ul.appendChild(li);
      });
    })
}

window.onload = getRooms
