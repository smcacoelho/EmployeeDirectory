
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    
$link = mysqli_connect("db5001769071.hosting-data.io", "dbu1330731", "Serafia11.", "dbs1460300");

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

if($_GET['flag'] == 'employee'){


    $query = "SELECT p.id, p.firstName, p.lastName, p.jobTitle, p.email, p.departmentID, d.name, d.id
    FROM personnel p 
    INNER JOIN department d 
    ON p.departmentID = d.id;";
 

    $data = array();

    /* execute multi query */
    if (mysqli_multi_query($link, $query)) {
        $i = 0;
        do {
            /* store first result set */
            if ($result = mysqli_store_result($link)) {
                while ($row = mysqli_fetch_row($result)) {
                   $data[$i][] = $row;
                }
                mysqli_free_result($result);
                
            }
            if (mysqli_more_results($link)) {
               $i++;
            }
           
        } while (mysqli_more_results($link) && mysqli_next_result($link));
    }
     /* close connection */
     mysqli_close($link);
     echo json_encode($data);
}

if($_GET['flag'] == 'department'){

    $query = "SELECT num, dname, dId, location.name 
    FROM 
    (SELECT count(p.id) AS num, d.name AS dname, d.locationID AS dlocationId, d.id AS dId 
    FROM personnel p 
    RIGHT JOIN department d ON d.id = p.departmentID 
    GROUP BY d.name) AS t 
    INNER JOIN location ON location.id = t.dlocationId;)";

if (mysqli_multi_query($link, $query)) {
    $i = 0;
    do {
        /* store first result set */
        if ($result = mysqli_store_result($link)) {
            while ($row = mysqli_fetch_row($result)) {
               $data[$i][] = $row;
            }
            mysqli_free_result($result);
            
        }
        if (mysqli_more_results($link)) {
           $i++;
        }
       
    } while (mysqli_more_results($link) && mysqli_next_result($link));
}
 /* close connection */
 mysqli_close($link);
 echo json_encode($data);
 
}if($_GET['flag'] == 'location'){

    $query = "SELECT ifnull(SUM(t.numEmp), 0 ) AS sum, location.name, location.id  
    FROM 
        (
            SELECT count(p.id) AS numEmp, d.name, d.locationID AS l2 
            FROM personnel p 
            RIGHT JOIN department d ON d.id = p.departmentID 
            GROUP BY d.name
        ) AS t

    RIGHT JOIN location ON t.l2 = location.id 
    GROUP BY location.id;";

if (mysqli_multi_query($link, $query)) {
    $i = 0;
    
    do {
        /* store first result set */
        if ($result = mysqli_store_result($link)) {
            while ($row = mysqli_fetch_row($result)) {
               $data[$i][] = $row;
            }
            mysqli_free_result($result);
            
        }
        if (mysqli_more_results($link)) {
           $i++;
        }
       
    } while (mysqli_more_results($link) && mysqli_next_result($link));

    
}
 /* close connection */
 mysqli_close($link);
 echo json_encode($data);

}if($_GET['flag'] == 'update'){

    $fname = $_REQUEST['fName'];
    $lname = $_REQUEST['lName'];
    $job = $_REQUEST['job'];
    $email = $_REQUEST['email'];
    $selectForm = $_REQUEST['department'];
    $id = $_REQUEST['employeeId'];

    if($stmt = mysqli_prepare($link, 
    "UPDATE personnel  
    SET firstName=?,lastName=?,jobTitle=?,email=?,departmentID=?
    WHERE id=?" )) {
        mysqli_stmt_bind_param($stmt, "ssssii", $fname, $lname, $job, $email, $selectForm, $id);
       
        mysqli_stmt_execute($stmt);

        mysqli_stmt_close($stmt);

        echo "updated";
    } else {
        echo mysqli_error($link);
    }
    mysqli_close($link);

}if($_GET['flag'] == 'addEmployee'){

    $fname = $_REQUEST['fName'];
    $lname = $_REQUEST['lName'];
    $job = $_REQUEST['job'];
    $email = $_REQUEST['email'];
    $selectForm = $_REQUEST['department'];
   

    if($stmt = mysqli_prepare($link, 
    "INSERT INTO personnel (firstName, lastName, jobTitle, email, departmentID) 
    VALUES (?,?,?,?,?)")) {
        mysqli_stmt_bind_param($stmt, "ssssi", $fname, $lname, $job, $email, $selectForm);
       
        mysqli_stmt_execute($stmt);

        mysqli_stmt_close($stmt);

        echo "New record created successfully";
    } else {
        echo  mysqli_error($link);
    }
    mysqli_close($link);

}if($_GET['flag'] == '/departments/:id'){
    $id = $_GET['id'];
    

    $query = "SELECT firstName, lastName, jobTitle, email
    FROM personnel 
    WHERE departmentID = $id; SELECT name FROM department WHERE id = $id";
 

    $data = array();

    /* execute multi query */
    if (mysqli_multi_query($link, $query)) {
        $i = 0;
        do {
            /* store first result set */
            if ($result = mysqli_store_result($link)) {
                while ($row = mysqli_fetch_row($result)) {
                   $data[$i][] = $row;
                }
                mysqli_free_result($result);
                
            }
            if (mysqli_more_results($link)) {
               $i++;
            }
           
        } while (mysqli_more_results($link) && mysqli_next_result($link));
    }
     /* close connection */
     mysqli_close($link);
     echo json_encode($data);
     
}if($_GET['flag'] == '/locations/:id'){

    $id = $_GET['id'];
    

    $query = "SELECT firstName, lastName, jobTitle, email
    FROM personnel p
    INNER JOIN department d ON d.id = p.departmentID
    WHERE d.locationID = $id; SELECT name FROM location WHERE id = $id";
    
    $data = array();

    /* execute multi query */
    if (mysqli_multi_query($link, $query)) {
        $i = 0;
        do {
            /* store first result set */
            if ($result = mysqli_store_result($link)) {
                while ($row = mysqli_fetch_row($result)) {
                   $data[$i][] = $row;
                }
                mysqli_free_result($result);
                
            }
            if (mysqli_more_results($link)) {
               $i++;
            }
           
        } while (mysqli_more_results($link) && mysqli_next_result($link));
    }
     /* close connection */
     mysqli_close($link);
     echo json_encode($data);
     
    
}if($_GET['flag'] == 'deleteEmp'){

    $id = $_GET['id'];
    
    $data = '';
    $query = "DELETE FROM personnel WHERE id=$id";

    if(mysqli_query($link, $query)){
        $data = "Success";
    }else{
        $data = mysqli_error($link);
    }
    
     /* close connection */
     mysqli_close($link);
     echo json_encode($data); 
     
}if($_GET['flag'] == 'deleteLoc'){

    $id = $_GET['id'];
    
    $data = '';
    $query = "DELETE FROM location WHERE id=$id";

    if(mysqli_query($link, $query)){
        $data = "Success";
    }else{
        $data = mysqli_error($link);
    }
    
     /* close connection */
     mysqli_close($link);
     echo json_encode($data); 
     
}if($_GET['flag'] == 'deleteDep'){

    $id = $_GET['id'];
    
    $data = '';
    $query = "DELETE FROM department WHERE id=$id";

    if(mysqli_query($link, $query)){
        $data = "Success";
    }else{
        $data = mysqli_error($link);
    }
    
     /* close connection */
     mysqli_close($link);
     echo json_encode($data); 
     
}if($_GET['flag'] == 'addLocation'){

    $name = $_REQUEST['name'];
    
    if($stmt = mysqli_prepare($link, 
    "INSERT INTO location (name) VALUES (?)")) {
        mysqli_stmt_bind_param($stmt, "s", $name);
       
        mysqli_stmt_execute($stmt);

        mysqli_stmt_close($stmt);

        echo "Record update successfully";
    } else {
        echo  mysqli_error($link);
    }
    mysqli_close($link);

    

 if(mysqli_query($link, "UPDATE personnel SET departmentID = $departmentId  WHERE id IN ($employees)")=== TRUE){
    
        printf("Table myCity successfully created.\n");
}else{
    echo  mysqli_error($link);
}
     
    
}if($_GET['flag'] == 'addDepartment'){

    $name = $_REQUEST['name'];
    $employees = implode ( ',', $_REQUEST['employees']);
    $location = $_REQUEST['location'];  

    if($stmt = mysqli_prepare($link, 
    "INSERT INTO department (name, locationID) VALUES (?,?)")) {
        mysqli_stmt_bind_param($stmt, "si", $name, $location);
       
        mysqli_stmt_execute($stmt);

        mysqli_stmt_close($stmt);

        echo "Record update successfully";
    } else {
        echo  mysqli_error($link);
    }

}

$departmentId;
$employees;

if($_GET['flag'] == 'addDepartment'){ 

    $name = $_REQUEST['name'];  
    $employees = implode ( ',', $_REQUEST['employees']);

    
    
    if($stmt = mysqli_prepare($link, 
    "SELECT id FROM department WHERE name=?")) {
        mysqli_stmt_bind_param($stmt, "s", $name);
       
        mysqli_stmt_execute($stmt);
        $result = mysqli_stmt_get_result($stmt);
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        mysqli_stmt_close($stmt);
        $departmentId = $row['id'];
        

        mysqli_query($link, "UPDATE personnel SET departmentID = $departmentId  WHERE id IN ($employees)");

    } else {
        echo  mysqli_error($link);
    }
    
}
   

?>