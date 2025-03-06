using System.Numerics;
using System.Windows;

namespace HealthCareApp
{
    public partial class MainWindow : Window
    {
        private readonly DoctorDbContext _db;

        public MainWindow()
        {
            InitializeComponent();
            _db = new DoctorDbContext();
            LoadData();
        }

        private void LoadData()
        {
            doctorGrid.ItemsSource = _db.Doctors.ToList();
        }

        private void Add_Doctor(object sender, RoutedEventArgs e)
        {
            Doctor doctor = new Doctor();
            DoctorWindow dWindow = new DoctorWindow(doctor);
            if (dWindow.ShowDialog() == true)
            {
                _db.Doctors.Add(doctor);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Delete_Doctor(object sender, RoutedEventArgs e)
        {
            if (doctorGrid.SelectedItem is Doctor d)
            {
                _db.Doctors.Remove(d);
                _db.SaveChanges();
                LoadData();
            }
        }

        private void Update_Doctor(object sender, RoutedEventArgs e)
        {
            if (doctorGrid.SelectedItem is Doctor d)
            {
                Doctor doctor = new Doctor
                {
                    Id = d.Id,
                    Name = d.Name,
                    Speciality = d.Speciality,
                    Email = d.Email,
                    Fee = d.Fee
                };
                DoctorWindow dWindow = new DoctorWindow(doctor);
                if (dWindow.ShowDialog() == true)
                {
                    d.Name = doctor.Name;
                    d.Speciality = doctor.Speciality;
                    d.Email = doctor.Email;
                    d.Fee = doctor.Fee;
                    _db.Doctors.Update(d);
                    _db.SaveChanges();
                    LoadData();
                }
            }
        }
    }
}