using System;

namespace BidsPrototype.Domain.Exceptions
{
    public class BusinessLogicException : Exception
    {
        public BusinessLogicException()
        {
        }

        public BusinessLogicException(string message) 
            : base(message)
        {
        }

        public BusinessLogicException(string message, Exception innerException) 
            : base(message, innerException)
        {
        }
    }
}
