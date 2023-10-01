import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import foods from "./data";

function FoodDetails() {
    const { id } = useParams();
    const food = foods.find(f => f.id.toString() === id );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return <div className="blog_container">
        <p className="text_align">{food.date} - Written by author name</p>
        <h2 className="text_align">{food.name}</h2>
        <img src={food.link} alt="food image" />
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
        <p>Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nulla aliquet enim tortor at auctor urna. Ornare suspendisse sed nisi lacus sed viverra tellus in. Nisl vel pretium lectus quam id leo in vitae. Facilisis gravida neque convallis a cras semper auctor. Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Velit dignissim sodales ut eu sem integer vitae justo eget. Duis at consectetur lorem donec massa sapien. Scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis. Commodo elit at imperdiet dui accumsan. Mi bibendum neque egestas congue quisque.
            <br /><br />
            At elementum eu facilisis sed odio morbi quis commodo odio. Felis bibendum ut tristique et. Auctor neque vitae tempus quam pellentesque nec nam aliquam. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Turpis massa sed elementum tempus egestas sed sed risus. Nibh venenatis cras sed felis eget. Libero volutpat sed cras ornare. Ultrices vitae auctor eu augue ut lectus. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Sed adipiscing diam donec adipiscing tristique risus. Consectetur adipiscing elit ut aliquam purus sit amet luctus venenatis. Quam pellentesque nec nam aliquam sem. Blandit turpis cursus in hac habitasse platea dictumst quisque. Convallis a cras semper auctor neque vitae.
            <br /><br />
            Commodo quis imperdiet massa tincidunt nunc. Ipsum nunc aliquet bibendum enim facilisis gravida. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer. Fermentum dui faucibus in ornare quam viverra orci sagittis. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Ornare arcu odio ut sem nulla pharetra. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Tristique senectus et netus et. Vitae turpis massa sed elementum tempus egestas sed sed risus. Pulvinar elementum integer enim neque volutpat. Lacinia at quis risus sed vulputate odio. Iaculis urna id volutpat lacus. Augue interdum velit euismod in pellentesque massa placerat duis. Lorem mollis aliquam ut porttitor leo.
            <br /><br />
            Ornare aenean euismod elementum nisi quis eleifend quam. Dictum at tempor commodo ullamcorper a lacus. Nec sagittis aliquam malesuada bibendum arcu. Duis convallis convallis tellus id interdum. Vestibulum sed arcu non odio euismod lacinia at quis. Tellus integer feugiat scelerisque varius. Nunc pulvinar sapien et ligula ullamcorper malesuada. Sit amet risus nullam eget. Lectus sit amet est placerat in egestas erat imperdiet sed. Enim nec dui nunc mattis enim ut tellus elementum. Aenean euismod elementum nisi quis eleifend quam. Lectus mauris ultrices eros in cursus turpis massa. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.
            <br /><br />
            Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Pharetra sit amet aliquam id diam. Amet nisl purus in mollis nunc. Eu feugiat pretium nibh ipsum. Cras fermentum odio eu feugiat. Rutrum quisque non tellus orci. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Luctus accumsan tortor posuere ac ut. Id velit ut tortor pretium viverra suspendisse potenti nullam. Iaculis nunc sed augue lacus viverra vitae congue eu. Sit amet cursus sit amet. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Duis convallis convallis tellus id interdum velit.</p>
    </div>
}

export default FoodDetails;