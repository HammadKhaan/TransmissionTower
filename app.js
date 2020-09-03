// function gc(){
    // var vol1 = document.getElementById("v1") 
    // var vol2 = document.getElementById("v2")
    // var vol3 = document.getElementById("v3") 
    // var vol4 = document.getElementById("v4") 
    // var vol5 = document.getElementById("v5") 
    // var vol6 = document.getElementById("v6") 
    // var vol7 = document.getElementById("v7") 
    // var vol8 = document.getElementById("v8")
    // var vol9 = document.getElementById("v9") 
    // var vol10 = document.getElementById("v10") 

    


    // if(document.getElementById("v1").click() == true){
    //      document.write("Your value is: 4m")
    //  }
    // else if(document.getElementById("v2").click() == true){
    //     document.write("Your value is: 5.504m")
    // }
    // else if(onclick === vol3){
    //     document.write("Your value is: 5.91m")
    // }
    // else if(onclick === vol4){
    //     document.write("Your value is: 6.114m")
    // }
    // else if(onclick === vol5){
    //     document.write("Your value is: 6.92m")
    // }
    // else if(onclick === vol6){
    //     document.write("Your value is: 7.94m")
    // }
    // else if(onclick === vol7){
    //     document.write("Your value is: 8.58m")
    // }
    // else if(onclick === vol8){
    //     document.write("Your value is: 9.51m")
    // }
    // else if(onclick === vol9){
    //     document.write("Your value is: 10.02m")
    // }
    // else if(onclick === vol10){
    //     document.write("Your value is: 11.961m")
    // }

// }








function answer(){
    var voltage = document.getElementById("vol")
    var know = document.getElementById("field")
    voltage = voltage.value;
    know = know.value;
    
    // FOR 11KV voltage
    
    if(voltage === "11" && know === "ground"){
        
        document.getElementById("ans").innerHTML = "Your value is 4m"
    }
    else if(voltage === "11" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 8m"
    }
    else if(voltage === "11" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 0.03cm.sq"
    }
    else if(voltage === "11" && know === "tower"){ 
        document.getElementById("ans").innerHTML =  "Type of tower is PCC pole"
    }
    else if(voltage === "11" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Dog"
    }
    else if(voltage === "11" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 70.54%"
    }
    else if(voltage === "11" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 65m"
    }
    else if(voltage === "11" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Pin Insulators"
    }
    else if(voltage === "11" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.0044196
        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = (2*2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "11" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.0064
        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }

    // FOR 66KV voltage
    
    if(voltage === "66" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 5.504m"
    }
    else if(voltage === "66" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 9m"
    }
    else if(voltage === "66" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 0.04cm.sq"
    }
    else if(voltage === "66" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is PCC pole"
    }
    else if(voltage === "66" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Panther"
    }
    else if(voltage === "66" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 26.9%"
    }
    else if(voltage === "66" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 225m"
    }
    else if(voltage === "66" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Suspension Insulators"
    }
    else if(voltage === "66" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.005455
        console.log(ds)

        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "66" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.00777
        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    

    // FOR 110KV voltage
    
    if(voltage === "110" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 5.91m"
    }
    else if(voltage === "110" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 9m"
    }
    else if(voltage === "110" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 3.2cm.sq"
    }
    else if(voltage === "110" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is Tabular-steel suspension towers"
    }
    else if(voltage === "110" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Dog"
    }
    else if(voltage === "110" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 20.6%"
    }
    else if(voltage === "110" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 305m"
    }
    else if(voltage === "110" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Suspension Insulators"
    }
    else if(voltage === "110" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.0044196
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "110" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.0064
        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }



    // FOR 132KV voltage
    
    if(voltage === "132" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 6.114m"
    }
    else if(voltage === "132" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 11.5m"
    }
    else if(voltage === "132" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 3cm.sq"
    }
    else if(voltage === "132" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is PCC pole"
    }
    else if(voltage === "132" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Panther"
    }
    else if(voltage === "132" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 15.41%"
    }
    else if(voltage === "132" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 200-250m"
    }
    else if(voltage === "132" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Strain Insulators"
    }
    else if(voltage === "132" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.005455
        console.log(ds)

        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "132" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.00777
        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    



    // FOR 220KV voltage
    
    if(voltage === "220" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 6.92m"
    }
    else if(voltage === "220" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 17m"
    }
    else if(voltage === "220" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 2.8cm.sq"
    }
    else if(voltage === "220" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is PCC pole"
    }
    else if(voltage === "220" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Zebra"
    }
    else if(voltage === "220" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 9.81%"
    }
    else if(voltage === "220" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 250m"
    }
    else if(voltage === "220" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Suspension Insulators"
    }
    else if(voltage === "220" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.00877824
        console.log(ds)

        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "220" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.01121
        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }

    // FOR 330KV voltage
    
    if(voltage === "330" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 7.94m"
    }
    else if(voltage === "330" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 38m"
    }
    else if(voltage === "330" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 2.9cm.sq"
    }
    else if(voltage === "330" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is Self-supporting lattice tower structure"
    }
    else if(voltage === "330" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Moose"
    }
    else if(voltage === "330" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 6.74%"
    }
    else if(voltage === "330" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 250m"
    }
    else if(voltage === "330" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Toughened Glass Insulator"
    }
    else if(voltage === "330" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.01216
        console.log(ds)

        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "330" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.01494
        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }


    // FOR 400KV voltage
    
    if(voltage === "400" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 8.58m"
    }
    else if(voltage === "400" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 38m"
    }
    else if(voltage === "400" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 4.5cm.sq"
    }
    else if(voltage === "400" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is Self-supporting lattice tower with pile foundation"
    }
    else if(voltage === "400" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Moose"
    }
    else if(voltage === "400" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 5.62%"
    }
    else if(voltage === "400" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 400m"
    }
    else if(voltage === "400" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Toughened Glass Type Disc Insulator"
    }
    else if(voltage === "400" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.01216
        console.log(ds)

        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "400" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.01494

        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }



    // FOR 500KV voltage
    
    if(voltage === "500" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 9.51m"
    }
    else if(voltage === "500" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 45-65m"
    }
    else if(voltage === "500" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 4.9cm.sq"
    }
    else if(voltage === "500" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is Lattice steel tower"
    }
    else if(voltage === "500" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Moose"
    }
    else if(voltage === "500" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 6.1%"
    }
    else if(voltage === "500" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 500m"
    }
    else if(voltage === "500" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Suspension Insulators"
    }
    else if(voltage === "500" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.01216
        console.log(ds)

        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "500" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.01494

        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }


    // FOR 550KV voltage
    
    if(voltage === "550" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 10.02m"
    }
    else if(voltage === "550" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 72m"
    }
    else if(voltage === "550" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 5.5cm.sq"
    }
    else if(voltage === "550" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is Lattice steel tower"
    }
    else if(voltage === "550" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Moose"
    }
    else if(voltage === "550" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 5.81%"
    }
    else if(voltage === "550" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 500m"
    }
    else if(voltage === "550" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Suspension Insulators"
    }
    else if(voltage === "550" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.01216
        console.log(ds)

        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "550" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.01494

        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }


    // FOR 765KV voltage
    
    if(voltage === "765" && know === "ground"){
        document.getElementById("ans").innerHTML = "Your value is 11.961m"
    }
    else if(voltage === "765" && know === "height"){
        document.getElementById("ans").innerHTML =  "Height of tower is 95m"
    }
    else if(voltage === "765" && know === "area"){
        document.getElementById("ans").innerHTML =  "Your value is 5.8cm.sq"
    }
    else if(voltage === "765" && know === "tower"){
        document.getElementById("ans").innerHTML =  "Type of tower is Tabular-steel suspension tower"
    }
    else if(voltage === "765" && know === "type"){
        document.getElementById("ans").innerHTML =  "Conductor Type is ACSR - Moose"
    }
    else if(voltage === "765" && know === "string"){
        document.getElementById("ans").innerHTML =  "Your value is 4.07%"
    }
    else if(voltage === "765" && know === "span"){
        document.getElementById("ans").innerHTML = "Your value is 500m"
    }
    else if(voltage === "765" && know === "insulator"){
        document.getElementById("ans").innerHTML = "Insulator type is Suspension Insulators"
    }
    else if(voltage === "765" && know === "inductance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var ds = 0.01216
        console.log(ds)

        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){
                
            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var l = (2*2.71828)-7
            l = l * Math.log(deq/ds)
            document.getElementById("ans").innerHTML = l

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * d
                dsl = Math.pow(dsl,0.5)
                var l = (2*2.71828)-7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsl = ds * (d*d)
                dsl = Math.pow(dsl,0.33333333)
                var l = 2*(2.71828) - 7
                l = l * Math.log(deq/dsl)
                document.getElementById("ans").innerHTML = l
            }
            else{
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }
    else if(voltage === "765" && know === "capacitance"){
        document.getElementById("ans").innerHTML = "Invalid"
        var r = 0.01494

        console.log(ds)
        var phase = document.getElementById("choose")
        phase = phase.value
        document.getElementById("ch").style.visibility = "visible" 
        document.getElementById("input").style.visibility = "visible"
        document.getElementById("phase").style.visibility = "hidden"
        var dab = document.getElementById("dab").value
        var dac = document.getElementById("dac").value
        var dbc = document.getElementById("dbc").value
        
        if(phase === "sc"){

            
            var deq = dab * dac * dbc
            deq = Math.pow(deq,0.33333333)
            var cn = (2*3.14159*8.854*2.71828)-12
            var cn1 = Math.log(deq/r)
            var cn2 = cn/cn1
            document.getElementById("ans").innerHTML = cn2

        }
        else if(phase === "bc"){
            
            document.getElementById("ans").innerHTML = "Invalid"
            document.getElementById("phase").style.visibility = "visible"
            var d = document.getElementById("d").value
            var m = document.getElementById("m").value

            if(m == 2){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * d
                dsc = Math.pow(dsc,0.5)
                var cn = (2*3.14159*8.854*2.71828)-12
                var cn1 = Math.log(deq/dsc)
                var cn2 = cn/cn1
                
                document.getElementById("ans").innerHTML = cn2

            }
            else if(m == 3){
                var deq = dab * dac * dbc
                deq = Math.pow(deq,0.33333333)
                var dsc = r * (d*d)
                dsc = Math.pow(dsl,0.33333333)
                var cn = (2*3.14159*8.854*2.71828) - 12
                var cn1 =  Math.log(deq/dsc)
                var cn2 = cn/cn1
                document.getElementById("ans").innerHTML = cn2
            }
            else{
                
                
                document.getElementById("ans").innerHTML = "Invalid"
            }
        }

        
    }

}






