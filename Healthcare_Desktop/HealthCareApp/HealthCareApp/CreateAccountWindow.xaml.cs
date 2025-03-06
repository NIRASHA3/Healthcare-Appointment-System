using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace HealthCareApp
{
    public partial class CreateAccountWindow : Window
    {
        private readonly DoctorDbContext _db;

        public CreateAccountWindow()
        {
            InitializeComponent();
            _db = new DoctorDbContext();
        }

        private void Create_Click(object sender, RoutedEventArgs e)
        {
            string username = UsernameTextBox.Text;
            string password = PasswordBox.Password;
            string email = EmailTextBox.Text;

            if (string.IsNullOrWhiteSpace(username) || string.IsNullOrWhiteSpace(password) || string.IsNullOrWhiteSpace(email))
            {
                MessageBox.Show("Please fill in all fields.");
                return;
            }

            if (_db.Users.Any(u => u.Username == username))
            {
                MessageBox.Show("Username already exists.");
                return;
            }

            if (_db.Users.Any(u => u.Email == email))
            {
                MessageBox.Show("Email already exists.");
                return;
            }

            User newUser = new User
            {
                Username = username,
                Password = password, 
                Email = email
            };

            _db.Users.Add(newUser);
            _db.SaveChanges();

            MessageBox.Show("Account created successfully!");
            WelcomeWindow welcomeWindow = new WelcomeWindow();
            welcomeWindow.Show();
            Close();
        }

        private void Cancel_Click(object sender, RoutedEventArgs e)
        {
            WelcomeWindow welcomeWindow = new WelcomeWindow();
            welcomeWindow.Show();
            Close();
        }
    }
}