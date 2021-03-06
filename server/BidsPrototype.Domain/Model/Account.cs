﻿namespace BidsPrototype.Domain.Model
{
    public class Account
    {
        public Account(string username, string rawPassword)
        {
            Username = username;
            RawPassword = rawPassword;
        }

        public int Id { get; private set; }

        public string Username { get; private set; }

        public string RawPassword { get; private set; }

        public User User { get; private set; }

        public bool ValidateCredentials(string username, string password)
        {
            return Username == username && RawPassword == password;
        }
    }
}
