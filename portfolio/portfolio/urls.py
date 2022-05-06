from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from portfolio import settings

urlpatterns = [
    path('', include('landing.urls')),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)