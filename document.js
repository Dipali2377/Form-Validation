function validate() {
  var status = true;
  var eid = document.forms["empform"]["eid"].value;
  if (eid == "") {
    status = false;
    document.getElementById("sid").innerHTML = "Enter the number";
  } else {
    var eidpattern = /^[0-9]+$/;
    if (!eid.match(eidpattern)) {
      status = false;
      document.getElementById("sid").innerHTML = "Only number allowed";
    } else {
      status = true;
      document.getElementById("sid").innerHTML = "";
    }
  }

  //var status=true;
  var ename = document.forms["empform"]["ename"].value;

  if (ename == "") {
    status = false;
    document.getElementById("nid").innerHTML = "Enter the name";
  } else {
    var nidpattern = /^[a-z]+$/;
    if (!ename.match(nidpattern)) {
      status = false;
      document.getElementById("nid").innerHTML =
        "Only lower case characters allowed";
    } else {
      status = true;
      document.getElementById("nid").innerHTML = "";
    }
  }
  return status;
}
