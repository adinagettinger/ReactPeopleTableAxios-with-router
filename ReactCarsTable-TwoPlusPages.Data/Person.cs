﻿using System;
using System.Collections.Generic;

namespace ReactCarsTable_TwoPlusPages.Data
{
    public class Person
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public int age { get; set; }
        public List<Car> Cars { get; set; }

        
       
    }
    
    
    
}
