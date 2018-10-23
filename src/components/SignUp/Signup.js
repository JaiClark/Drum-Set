import React from 'react';
import 'spectre.css/dist/spectre.min.css';
import 'spectre.css/dist/spectre-icons.css';
import './index.css';


class SignUpForm extends React.PureComponent {
    render() {
        return (
            <div>
                <form>
                    <label>
                        Name: 
                        <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

}

export default SignUpForm;