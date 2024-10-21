using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UEPOnlineReservationSystem.Models;

namespace UEPOnlineReservationSystem.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
     public IActionResult Contact()
    {
        return View();
    }

     public IActionResult Event()
    {
        return View();
    }

     public IActionResult Facilities()
    {
        return View();
    }
     public IActionResult Farmers()
    {
        return View();
    }
     public IActionResult Gallery()
    {
        return View();
    }
     public IActionResult Kapihan()
    {
        return View();
    }
    public IActionResult Privacy()
    {
        return View();
    }
     public IActionResult Review()
    {
        return View();
    }
     public IActionResult Staff()
    {
        return View();
    }
     public IActionResult White_beach()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
