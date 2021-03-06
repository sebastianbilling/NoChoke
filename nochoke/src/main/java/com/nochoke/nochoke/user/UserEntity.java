package com.nochoke.nochoke.user;

import com.nochoke.nochoke.allergy.Allergy;
import com.nochoke.nochoke.history.History;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @NotNull
    private String surname, lastname, email, password;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Allergy> allergies;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<History> historyList;

    public UserEntity(String surname, String lastname, String email, String password) {
        this.surname = surname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
    }
    public void addAllergyToUser(Allergy allergy){
        this.allergies.add(allergy);
    }

}
