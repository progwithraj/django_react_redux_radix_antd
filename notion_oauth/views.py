import requests
from django.conf import settings
from django.http import HttpResponse
from django.shortcuts import redirect
from rest_framework.views import APIView

from rest_framework.decorators import api_view
from notion_oauth.services.notion_oauth_service import NotionOAuthServices

client_id = settings.NOTION_OAUTH_CLIENT
client_secret =settings.NOTION_OAUTH_SECRET

@api_view(['POST', 'GET'])
def redirect_to_notion_oauth(request):
    return redirect(settings.NOTION_AUTHORIZATION_URL)

@api_view(['GET'])
def redirect_from_notion_oauth(request):
    ns = NotionOAuthServices()
    url_full_path = request.get_full_path()
    print(url_full_path)
    response = ns.redirect_response_from_notion(client_id, client_secret, url_full_path)

    return HttpResponse(response)

# views.py

from django.shortcuts import redirect
import requests
from allauth.socialaccount.models import SocialApp
from allauth.socialaccount.providers.oauth2.client import OAuth2Error
from django.http import HttpResponse

def notion_oauth_login(request):
    social_app = SocialApp.objects.get(provider='notion')
    authorization_url = social_app.get_login_url(request)

    return redirect(authorization_url)

def notion_oauth_callback(request):
    try:
        social_app = SocialApp.objects.get(provider='notion')
        user = request.user
        app = social_app.get_provider_instance()
        app.set_authentication_callback(request)

        response = app.complete_login(request, app.get_querystring(request))
        if response is not None:
            return response

        access_token = user.socialaccount_set.filter(provider='notion').first().socialtoken_set.first().token

        # Now, you can make API requests to Notion using the access token
        notion_databases = get_notion_databases(access_token)

        return HttpResponse(f'Notion Databases: {notion_databases}')
    except OAuth2Error as e:
        return HttpResponse(f'OAuth2Error: {e}')

# views.py (continued)

def get_notion_databases(access_token):
    headers = {
        'Authorization': f'Bearer {access_token}',
        'Notion-Version': '2021-08-16',  # Specify your desired Notion API version
    }

    response = requests.get('https://api.notion.com/v1/databases', headers=headers)

    if response.status_code == 200:
        data = response.json()
        return data['results']
    else:
        return []
