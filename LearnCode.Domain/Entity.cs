using System;
using System.Collections.Generic;
using System.Text;

namespace LearnCode.Domain
{
    public abstract class Entity
    {
        public Guid Id { get; set; }
        
        public override bool Equals(object obj)
        {
            //We will case the object passed as an argument as a Entity Type.
            var compareTo = obj as Entity;
            //THen we will check if the reference compared to the casted value is true if it is it will return true else will return false if it is null.
            if (ReferenceEquals(this, compareTo) == true) return true;
            if (ReferenceEquals(null, compareTo) == false) return false;
            //If it does not meet any of the two conditions we will recursively call our function.
            return Id.Equals(compareTo.Id);
        }
        public static bool operator ==(Entity a, Entity b)
        {
            //If both references are null when compared to null that means that the condition is true.
            if (ReferenceEquals(a, null) && ReferenceEquals(b, null))
            {
                return true;
            }
            //Else it is false.
            if(ReferenceEquals(a, null) || ReferenceEquals(b, null)) {
                return false;
            }
            //If the argument are not null or do not both equal null, return the result of comparing it to one another.
            return a.Equals(b);
        }
        public static bool operator !=(Entity a, Entity b)
        {
            //Return the opposite of a == b
            return !(a == b);
        }
        public override int GetHashCode()
        {
            //Get the hashed id from hashing 907 times, and return the new hashed id.
            return (GetType().GetHashCode() * 907) + Id.GetHashCode();
        }
        
    }
}
