from django.shortcuts import render
from django.views import generic
from .models import Bio

# Create your views here.

class BioList(generic.ListView):
    queryset = Bio.objects.all()
    template = "bio/bio.html"
    paginate_by = 3
