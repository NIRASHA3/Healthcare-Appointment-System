   M S B A M L   `   `   `  ����  HealthCareApp    HealthCareApp.MainWindow   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Doctor Management��5   	   $	��450��6#   $	��800��60    � WindowState$ 	Maximized=�6<   .��5      � 
������� � RowDefinitions 5   
   �� 5      $
��Auto �6   �� 5      $��* �6   .+�5   
   �� $��0��6   $��Doctor Management��5      $��24(�5      $
��Bold"�5      $��10q�5      
����=H�$��Center=�5      � 5   
   $��1��6   $��10q�6   
������� � ColumnDefinitions 5      �� 5      $��3* �6#   �� 5      $��* �6#   .+�5      &   System.Windows.Controls.DataGrid  -   5          Name$ 
doctorGrid��5         AutoGenerateColumns$
 True��5         SelectionMode$ Single=�5      $��0,0,10,0q�5      �� 5      $��1��6   $	��Top=�6)   $��10q�6A   .+�5      �� -   5        $��
Add Doctor��5      $��5q�5       $��10q�5!      $��14(�5"      $��SemiBold"�5#      
����=H�
�������5&      �� 5'      -   5        $��Update Doctor��5'      $��5q�5(      $��5q�5)      $��14(�5*      $��SemiBold"�5+      
����=H�
�������5.      �� 5/      -   5        $��Delete Doctor��5/      $��5q�50      $��5q�51      $��14(�52      $��SemiBold"�53      
����=H�
�������56      57      58      59      5:      