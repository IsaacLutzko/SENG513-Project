from http.client import HTTPResponse
from django.shortcuts import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
  return render(request, "authentication/index.html",{})

def home(request):
  return render(request, "authentication/home.html",{})