from django.db import models
import uuid

class User (models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, db_column='Id', editable=False)
    first_name = models.CharField(max_length=160, null=False, db_column='FirstName')
    last_name = models.CharField(max_length=160, null=False, db_column='LastName')
    email = models.CharField(max_length=160, null=False, db_column='Email')
    password = models.CharField(max_length=160, null=False, db_column='Password')

    class Meta:
        db_table = "Users"

    def set_password(self, password: str):
        self.password = password
    def __str__(self) -> str:
        return f'{self.first_name} {self.last_name}'