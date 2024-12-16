from django.urls import path
from .views import BioList

urlpatterns = [
    path('', BioList.as_view(), name='bio')
]
