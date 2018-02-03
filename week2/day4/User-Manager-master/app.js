$(document).ready(function() {

    // RESTful convention
    // Stands for Representational State Transfer

    // Post -> Create
    // GET -> Read
    // PUT -> Update
    // DELETE -> Destroy
    function userEntryTemplate(person) {
        return `
        <tr><td>${person.firstname}</td>
                <td>${person.lastname}</td>
                <td>${person.username}</td>
                <td>${person.email}</td>
                <td><a href="#" class="btn btn-primary">Edit</a></td></tr>`;
    }

    $.ajax({
        type: "GET",
        url: "http://myapi-profstream.herokuapp.com/api/eead22/persons"
    })
    .then(function(data) {

        var $tbody = $('tbody');
        //Step 1: Loop through "persons" data
        data.forEach(function(person){
            var row = userEntryTemplate(person);
            $tbody.append(row);
        });

        //Step 2: Dynamically create HTML (table row) with data
        //Step 3: Append new HTML to DOM
    })
    .catch(function(err) {
        console.log(err);
    });

    $("#new-person-form").on("submit", function(event) {
        event.preventDefault();
        console.log($("#new-person-form").val());
        console.log($("input[name='firstname']").val());
        // Step 1: Capture information from form into a new object.
        // Step 2: Perform a post AJAX request to the same endpoint as get.
        // Step 3: Create new HTML dynamically from information entered on the form and append to tbody.
        // Step 4: Hide modal and clear form.

        // $.ajax({
        // type: "POST"
        // url: "your endpoint"
        // data: object of data from form
        // });

        var newPerson = {
            firstName: $("input[name='firstname']").val(),
            lastName: $("input[name='lastname']").val(),
            username: $("input[name='username']").val(),
            email: $("input[name='email']").val()
        };

        $.ajax({
        type: "POST",
        url: "http://myapi-profstream.herokuapp.com/api/eead22/persons",
        data: newPerson
        })
        .then(function(person) {
           var newHTML = userEntryTemplate(person);

           // Append the newly-created HTML to the dom
           $("tbody").append(newHTML);

        //   Hide the modal
            $("#add-user-modal").modal("hide");
        //    Reset the form
            $("#new-person-form")[0].reset();
        })
        .catch(function(err) {
            console.log(err);
        })

    });

});