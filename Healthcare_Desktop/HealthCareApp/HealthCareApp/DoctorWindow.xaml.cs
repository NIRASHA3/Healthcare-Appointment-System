using System.Numerics;
using System.Windows;

namespace HealthCareApp
{
    public partial class DoctorWindow : Window
    {
        public Doctor Doctor { get; private set; }

        public DoctorWindow(Doctor doctor)
        {
            InitializeComponent();
            Doctor = doctor;

            // Load existing values if any
            NameTextBox.Text = doctor.Name;
            SpecialityTextBox.Text = doctor.Speciality;
            EmailTextBox.Text = doctor.Email;
            FeeTextBox.Text = doctor.Fee.ToString();
        }

        private void Save_Doctor(object sender, RoutedEventArgs e)
        {
            Doctor.Name = NameTextBox.Text;
            Doctor.Speciality = SpecialityTextBox.Text;
            Doctor.Email = EmailTextBox.Text;

            if (decimal.TryParse(FeeTextBox.Text, out decimal fee))
            {
                Doctor.Fee = fee;
                DialogResult = true;
                Close();
            }
            else
            {
                MessageBox.Show("Please enter a valid fee amount.");
            }
        }

        private void Cancel(object sender, RoutedEventArgs e)
        {
            DialogResult = false;
            Close();
        }
    }
}