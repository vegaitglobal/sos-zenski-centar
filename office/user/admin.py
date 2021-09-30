from user.models import User
from django.contrib import admin
from django.forms import ModelForm, PasswordInput
from django.contrib.auth import password_validation
from django.core.exceptions import ValidationError
from .password_hash import HashPassword
from django.contrib.auth.models import User as AdminUser
from django.contrib.auth.models import Group

class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password')
        widgets = {
            'password': PasswordInput(),
        }

    def _post_clean(self):
        super()._post_clean()
        # Validate the password after self.instance is updated with form data
        # by super().
        password = self.cleaned_data.get('password')
        if password:
            try:
                password_validation.validate_password(password, self.instance)
            except ValidationError as error:
                self.add_error('password', error)
    
    def clean_password(self):
        data = self.cleaned_data['password']
        return HashPassword(data)


class UserAdmin(admin.ModelAdmin):
    form = UserForm
    list_display = ('first_name', 'last_name', 'email')


admin.site.register(User, UserAdmin)
admin.site.unregister(AdminUser)
admin.site.unregister(Group)
