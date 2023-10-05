from django.urls import path
from . import views
from notion_oauth.views import redirect_to_notion_oauth, redirect_from_notion_oauth


urlpatterns = [
    path('oauth/', redirect_to_notion_oauth, name='notion_oauth_start'),
    path('redirect_oauth/', redirect_from_notion_oauth, name='notion_oauth_stop'),
    path('notion/login/', views.notion_oauth_login, name='notion_oauth_login'),
    path('notion/callback/', views.notion_oauth_callback, name='notion_oauth_callback'),
]
