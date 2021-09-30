import hashlib
from base64 import b64encode
from django.conf import settings

def HashPassword(password: str):
    salt = settings.SALT

    bytes_password = password.encode('utf-8') 
    bytes_salt = salt.encode('utf-8')
    for i in range(10000):
        b64pw = b64encode(bytes_password).decode()
        b64sa = b64encode(bytes_salt).decode()
        bytes_iteration = (b64pw + b64sa).encode('utf-8')
        bytes_password = hashlib.sha512(bytes_iteration).digest()
    return b64encode(bytes_password).decode()


