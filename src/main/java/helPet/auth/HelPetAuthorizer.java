package helPet.auth;

import helPet.entity.User;
import io.dropwizard.auth.Authorizer;

public class HelPetAuthorizer implements Authorizer<User> {
    @Override
    public boolean authorize(User user, String role) {
        // TODO: check auth
        return true;
//        return user.getName().equals("good-guy") && role.equals("ADMIN");
    }
}
