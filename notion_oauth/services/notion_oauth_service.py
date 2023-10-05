import requests
from oauthlib.oauth2 import WebApplicationClient

class NotionOAuthServices:
    server_url = 'http://localhost:8000'
    redirect_uri = f'{server_url}/notion/redirect'
    
    def authenticate_to_notion(self, notion_client_id):
        return WebApplicationClient(notion_client_id).authenticate

    @staticmethod
    def get_notion_auth_redirect_url(notion_client_id):
        auth_base_uri = 'https://api.notion.com/v1/oauth/authorize'
        
        client = WebApplicationClient(notion_client_id)
        authorization_request_url = client.prepare_request_uri(
            auth_base_uri, NotionOAuthServices.redirect_uri
        )
        return authorization_request_url

    @staticmethod
    def redirect_response_from_notion(client_id, client_secret, url_full_path):
        token_url = 'https://api.notion.com/v1/oauth/token'
            
        client = WebApplicationClient(client_id, client_secret)
        client.parse_request_uri_response(url_full_path) # Extracts the code from the url
        
            # Creates the URL, headers, and request body for the token request
        token_request_params = client.prepare_token_request(token_url, url_full_path, NotionOAuthServices.redirect_uri)

            # Makes a request for the token, authenticated with the client ID and secret
        auth = requests.auth.HTTPBasicAuth(
            client_id, client_secret)
        response = requests.post(
            token_request_params[0], headers=token_request_params[1], data=token_request_params[2], auth=auth)
        return response