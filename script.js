<script>
        $(document).ready(function() {
            
            function filterTable() {
                var search1 = $("#search1").val().toLowerCase();
                var search2 = $("#search2").val().toLowerCase();
                var search3 = $("#search3").val().toLowerCase();
                var search4 = $("#search4").val().toLowerCase();

                // Filter rows based on all search criteria
                $("#employeeTable tr:not(:first-child)").filter(function() {
                    var td1 = $(this).find("td:nth-child(1)").text().toLowerCase();
                    var td2 = $(this).find("td:nth-child(2)").text().toLowerCase();
                    var td3 = $(this).find("td:nth-child(3)").text().toLowerCase();
                    var td4 = $(this).find("td:nth-child(4)").text().toLowerCase();

                    // Toggle the visibility of the row if all filters match (AND logic)
                    $(this).toggle(
                        (td1.indexOf(search1) > -1 || search1 === '') &&
                        (td2.indexOf(search2) > -1 || search2 === '') &&
                        (td3.indexOf(search3) > -1 || search3 === '') &&
                        (td4.indexOf(search4) > -1 || search4 === '')
                    );
                });
            }

            
            $("#search1, #search2, #search3, #search4").on("keyup", function() {
                filterTable();
            });

            
            $("#clear4").on("click", function() {
                $("#search1").val('');
                $("#search2").val('');
                $("#search3").val('');
                $("#search4").val('');
                $("#employeeTable tr").show();
            });

            // Clear input values when clicked/focused
            $("#search1, #search2").on("click focus", function() {
                this.value = ''; // Clear the value to show all options
            });

            });
    </script>
