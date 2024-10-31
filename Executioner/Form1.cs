using Microsoft.VisualBasic.ApplicationServices;
using System;
using System.Diagnostics;

namespace Executioner
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void FormSizeChanged(object sender, EventArgs e)
        {
            webView21.Size = new Size(this.Width, this.Height);
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            string fileName = "index.html";
            string path = Path.Combine(Environment.CurrentDirectory, @"Game\", fileName);
            webView21.Source = new Uri(path);
        }
    }
}
